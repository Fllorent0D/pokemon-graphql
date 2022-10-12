import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutMovesInput } from './move-changelog-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutMovesInput } from './move-changelog-create-or-connect-without-moves.input';
import { move_changelogUpsertWithWhereUniqueWithoutMovesInput } from './move-changelog-upsert-with-where-unique-without-moves.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { move_changelogUpdateWithWhereUniqueWithoutMovesInput } from './move-changelog-update-with-where-unique-without-moves.input';
import { move_changelogUpdateManyWithWhereWithoutMovesInput } from './move-changelog-update-many-with-where-without-moves.input';
import { move_changelogScalarWhereInput } from './move-changelog-scalar-where.input';

@InputType()
export class move_changelogUncheckedUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_changelogCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutMovesInput)
    create?: Array<move_changelogCreateWithoutMovesInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_changelogUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_changelogUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_changelogUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    set?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    disconnect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    delete?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_changelogUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_changelogUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_changelogUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_changelogUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_changelogUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_changelogScalarWhereInput)
    deleteMany?: Array<move_changelogScalarWhereInput>;
}
