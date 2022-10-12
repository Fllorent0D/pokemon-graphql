import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textCreateWithoutMovesInput } from './move-flavor-text-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateOrConnectWithoutMovesInput } from './move-flavor-text-create-or-connect-without-moves.input';
import { move_flavor_textUpsertWithWhereUniqueWithoutMovesInput } from './move-flavor-text-upsert-with-where-unique-without-moves.input';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { move_flavor_textUpdateWithWhereUniqueWithoutMovesInput } from './move-flavor-text-update-with-where-unique-without-moves.input';
import { move_flavor_textUpdateManyWithWhereWithoutMovesInput } from './move-flavor-text-update-many-with-where-without-moves.input';
import { move_flavor_textScalarWhereInput } from './move-flavor-text-scalar-where.input';

@InputType()
export class move_flavor_textUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_flavor_textCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_textCreateWithoutMovesInput)
    create?: Array<move_flavor_textCreateWithoutMovesInput>;

    @Field(() => [move_flavor_textCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_textCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_flavor_textCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_flavor_textUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_textUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_flavor_textUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    set?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    disconnect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    delete?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    connect?: Array<move_flavor_textWhereUniqueInput>;

    @Field(() => [move_flavor_textUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_textUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_flavor_textUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flavor_textUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_textUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_flavor_textUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => move_flavor_textScalarWhereInput)
    deleteMany?: Array<move_flavor_textScalarWhereInput>;
}
