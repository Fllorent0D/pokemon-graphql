import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesCreateWithoutMovesInput } from './move-names-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_namesCreateOrConnectWithoutMovesInput } from './move-names-create-or-connect-without-moves.input';
import { move_namesUpsertWithWhereUniqueWithoutMovesInput } from './move-names-upsert-with-where-unique-without-moves.input';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';
import { move_namesUpdateWithWhereUniqueWithoutMovesInput } from './move-names-update-with-where-unique-without-moves.input';
import { move_namesUpdateManyWithWhereWithoutMovesInput } from './move-names-update-many-with-where-without-moves.input';
import { move_namesScalarWhereInput } from './move-names-scalar-where.input';

@InputType()
export class move_namesUncheckedUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_namesCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_namesCreateWithoutMovesInput)
    create?: Array<move_namesCreateWithoutMovesInput>;

    @Field(() => [move_namesCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_namesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_namesCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_namesUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_namesUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_namesUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    set?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    disconnect?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    delete?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    connect?: Array<move_namesWhereUniqueInput>;

    @Field(() => [move_namesUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_namesUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_namesUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_namesUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_namesUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_namesUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_namesScalarWhereInput], {nullable:true})
    @Type(() => move_namesScalarWhereInput)
    deleteMany?: Array<move_namesScalarWhereInput>;
}
