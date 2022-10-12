import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesCreateWithoutMovesInput } from './move-meta-stat-changes-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesCreateOrConnectWithoutMovesInput } from './move-meta-stat-changes-create-or-connect-without-moves.input';
import { move_meta_stat_changesUpsertWithWhereUniqueWithoutMovesInput } from './move-meta-stat-changes-upsert-with-where-unique-without-moves.input';
import { move_meta_stat_changesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { move_meta_stat_changesUpdateWithWhereUniqueWithoutMovesInput } from './move-meta-stat-changes-update-with-where-unique-without-moves.input';
import { move_meta_stat_changesUpdateManyWithWhereWithoutMovesInput } from './move-meta-stat-changes-update-many-with-where-without-moves.input';
import { move_meta_stat_changesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';

@InputType()
export class move_meta_stat_changesUncheckedUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_meta_stat_changesCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateWithoutMovesInput)
    create?: Array<move_meta_stat_changesCreateWithoutMovesInput>;

    @Field(() => [move_meta_stat_changesCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_meta_stat_changesCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_meta_stat_changesUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_meta_stat_changesUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    set?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    disconnect?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    delete?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    connect?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_meta_stat_changesUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_meta_stat_changesUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_meta_stat_changesUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_meta_stat_changesScalarWhereInput], {nullable:true})
    @Type(() => move_meta_stat_changesScalarWhereInput)
    deleteMany?: Array<move_meta_stat_changesScalarWhereInput>;
}
