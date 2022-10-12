import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutTypesInput } from './moves-update-with-where-unique-without-types.input';
import { movesUpdateManyWithWhereWithoutTypesInput } from './moves-update-many-with-where-without-types.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUpdateManyWithoutTypesNestedInput {

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    set?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    disconnect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    delete?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
