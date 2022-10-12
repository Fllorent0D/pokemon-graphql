import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesUpdateInput } from '../nature-names/nature-names-update.input';
import { Type } from 'class-transformer';
import { nature_namesWhereUniqueInput } from '../nature-names/nature-names-where-unique.input';

@ArgsType()
export class UpdateOnenatureNamesArgs {

    @Field(() => nature_namesUpdateInput, {nullable:false})
    @Type(() => nature_namesUpdateInput)
    data!: nature_namesUpdateInput;

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;
}
