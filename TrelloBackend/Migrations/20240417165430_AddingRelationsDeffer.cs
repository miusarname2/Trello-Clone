using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TrelloBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddingRelationsDeffer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Columns_Tables_TableId",
                table: "Columns");

            migrationBuilder.DropForeignKey(
                name: "FK_Tables_Users_CreatorId",
                table: "Tables");

            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Columns_ColumnId",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_ColumnId",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Columns_TableId",
                table: "Columns");

            migrationBuilder.RenameColumn(
                name: "CreatorId",
                table: "Tables",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Tables_CreatorId",
                table: "Tables",
                newName: "IX_Tables_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tables_Users_UserId",
                table: "Tables",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tables_Users_UserId",
                table: "Tables");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tables",
                newName: "CreatorId");

            migrationBuilder.RenameIndex(
                name: "IX_Tables_UserId",
                table: "Tables",
                newName: "IX_Tables_CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_ColumnId",
                table: "Tasks",
                column: "ColumnId");

            migrationBuilder.CreateIndex(
                name: "IX_Columns_TableId",
                table: "Columns",
                column: "TableId");

            migrationBuilder.AddForeignKey(
                name: "FK_Columns_Tables_TableId",
                table: "Columns",
                column: "TableId",
                principalTable: "Tables",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tables_Users_CreatorId",
                table: "Tables",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Columns_ColumnId",
                table: "Tasks",
                column: "ColumnId",
                principalTable: "Columns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
