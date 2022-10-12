import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-create-without-moves-moves-tosuper-contest-combos-second-move-id.input';
import { Type } from 'class-transformer';
import { super_contest_combosCreateOrConnectWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-create-or-connect-without-moves-moves-tosuper-contest-combos-second-move-id.input';
import { super_contest_combosUpsertWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-upsert-with-where-unique-without-moves-moves-tosuper-contest-combos-second-move-id.input';
import { super_contest_combosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { super_contest_combosUpdateWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-update-with-where-unique-without-moves-moves-tosuper-contest-combos-second-move-id.input';
import { super_contest_combosUpdateManyWithWhereWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-update-many-with-where-without-moves-moves-tosuper-contest-combos-second-move-id.input';
import { super_contest_combosScalarWhereInput } from './super-contest-combos-scalar-where.input';

@InputType()
export class super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput {

    @Field(() => [super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput], {nullable:true})
    @Type(() => super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    create?: Array<super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput>;

    @Field(() => [super_contest_combosCreateOrConnectWithoutMoves_movesTosuper_contest_combos_second_move_idInput], {nullable:true})
    @Type(() => super_contest_combosCreateOrConnectWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    connectOrCreate?: Array<super_contest_combosCreateOrConnectWithoutMoves_movesTosuper_contest_combos_second_move_idInput>;

    @Field(() => [super_contest_combosUpsertWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput], {nullable:true})
    @Type(() => super_contest_combosUpsertWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    upsert?: Array<super_contest_combosUpsertWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput>;

    @Field(() => [super_contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_combosWhereUniqueInput)
    set?: Array<super_contest_combosWhereUniqueInput>;

    @Field(() => [super_contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_combosWhereUniqueInput)
    disconnect?: Array<super_contest_combosWhereUniqueInput>;

    @Field(() => [super_contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_combosWhereUniqueInput)
    delete?: Array<super_contest_combosWhereUniqueInput>;

    @Field(() => [super_contest_combosWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_combosWhereUniqueInput)
    connect?: Array<super_contest_combosWhereUniqueInput>;

    @Field(() => [super_contest_combosUpdateWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput], {nullable:true})
    @Type(() => super_contest_combosUpdateWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    update?: Array<super_contest_combosUpdateWithWhereUniqueWithoutMoves_movesTosuper_contest_combos_second_move_idInput>;

    @Field(() => [super_contest_combosUpdateManyWithWhereWithoutMoves_movesTosuper_contest_combos_second_move_idInput], {nullable:true})
    @Type(() => super_contest_combosUpdateManyWithWhereWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    updateMany?: Array<super_contest_combosUpdateManyWithWhereWithoutMoves_movesTosuper_contest_combos_second_move_idInput>;

    @Field(() => [super_contest_combosScalarWhereInput], {nullable:true})
    @Type(() => super_contest_combosScalarWhereInput)
    deleteMany?: Array<super_contest_combosScalarWhereInput>;
}
