import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapCreateWithoutMovesInput } from './move-flag-map-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_flag_mapCreateOrConnectWithoutMovesInput } from './move-flag-map-create-or-connect-without-moves.input';
import { move_flag_mapUpsertWithWhereUniqueWithoutMovesInput } from './move-flag-map-upsert-with-where-unique-without-moves.input';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { move_flag_mapUpdateWithWhereUniqueWithoutMovesInput } from './move-flag-map-update-with-where-unique-without-moves.input';
import { move_flag_mapUpdateManyWithWhereWithoutMovesInput } from './move-flag-map-update-many-with-where-without-moves.input';
import { move_flag_mapScalarWhereInput } from './move-flag-map-scalar-where.input';

@InputType()
export class move_flag_mapUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_flag_mapCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_flag_mapCreateWithoutMovesInput)
    create?: Array<move_flag_mapCreateWithoutMovesInput>;

    @Field(() => [move_flag_mapCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_flag_mapCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_flag_mapCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_flag_mapUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flag_mapUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_flag_mapUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    set?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    disconnect?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    delete?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_mapWhereUniqueInput)
    connect?: Array<move_flag_mapWhereUniqueInput>;

    @Field(() => [move_flag_mapUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flag_mapUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_flag_mapUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flag_mapUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_flag_mapUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_flag_mapUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_flag_mapScalarWhereInput], {nullable:true})
    @Type(() => move_flag_mapScalarWhereInput)
    deleteMany?: Array<move_flag_mapScalarWhereInput>;
}
