import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-create-without-moves-contest-combos-first-move-id-tomoves.input';
import { Type } from 'class-transformer';
import { contest_combosCreateOrConnectWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-create-or-connect-without-moves-contest-combos-first-move-id-tomoves.input';
import { contest_combosUpsertWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-upsert-with-where-unique-without-moves-contest-combos-first-move-id-tomoves.input';
import { contest_combosWhereUniqueInput } from './contest-combos-where-unique.input';
import { contest_combosUpdateWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-update-with-where-unique-without-moves-contest-combos-first-move-id-tomoves.input';
import { contest_combosUpdateManyWithWhereWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-update-many-with-where-without-moves-contest-combos-first-move-id-tomoves.input';
import { contest_combosScalarWhereInput } from './contest-combos-scalar-where.input';

@InputType()
export class contest_combosUncheckedUpdateManyWithoutMoves_contest_combos_first_move_idTomovesNestedInput {

    @Field(() => [contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput], {nullable:true})
    @Type(() => contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput)
    create?: Array<contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput>;

    @Field(() => [contest_combosCreateOrConnectWithoutMoves_contest_combos_first_move_idTomovesInput], {nullable:true})
    @Type(() => contest_combosCreateOrConnectWithoutMoves_contest_combos_first_move_idTomovesInput)
    connectOrCreate?: Array<contest_combosCreateOrConnectWithoutMoves_contest_combos_first_move_idTomovesInput>;

    @Field(() => [contest_combosUpsertWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput], {nullable:true})
    @Type(() => contest_combosUpsertWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput)
    upsert?: Array<contest_combosUpsertWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput>;

    @Field(() => [contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => contest_combosWhereUniqueInput)
    set?: Array<contest_combosWhereUniqueInput>;

    @Field(() => [contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => contest_combosWhereUniqueInput)
    disconnect?: Array<contest_combosWhereUniqueInput>;

    @Field(() => [contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => contest_combosWhereUniqueInput)
    delete?: Array<contest_combosWhereUniqueInput>;

    @Field(() => [contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => contest_combosWhereUniqueInput)
    connect?: Array<contest_combosWhereUniqueInput>;

    @Field(() => [contest_combosUpdateWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput], {nullable:true})
    @Type(() => contest_combosUpdateWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput)
    update?: Array<contest_combosUpdateWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput>;

    @Field(() => [contest_combosUpdateManyWithWhereWithoutMoves_contest_combos_first_move_idTomovesInput], {nullable:true})
    @Type(() => contest_combosUpdateManyWithWhereWithoutMoves_contest_combos_first_move_idTomovesInput)
    updateMany?: Array<contest_combosUpdateManyWithWhereWithoutMoves_contest_combos_first_move_idTomovesInput>;

    @Field(() => [contest_combosScalarWhereInput], {nullable:true})
    @Type(() => contest_combosScalarWhereInput)
    deleteMany?: Array<contest_combosScalarWhereInput>;
}
