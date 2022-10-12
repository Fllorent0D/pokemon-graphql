import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { Type } from 'class-transformer';
import { type_namesUpdateWithoutTypesInput } from './type-names-update-without-types.input';

@InputType()
export class type_namesUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;

    @Field(() => type_namesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => type_namesUpdateWithoutTypesInput)
    data!: type_namesUpdateWithoutTypesInput;
}
