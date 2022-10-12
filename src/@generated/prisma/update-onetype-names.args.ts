import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesUpdateInput } from '../type-names/type-names-update.input';
import { Type } from 'class-transformer';
import { type_namesWhereUniqueInput } from '../type-names/type-names-where-unique.input';

@ArgsType()
export class UpdateOnetypeNamesArgs {

    @Field(() => type_namesUpdateInput, {nullable:false})
    @Type(() => type_namesUpdateInput)
    data!: type_namesUpdateInput;

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;
}
