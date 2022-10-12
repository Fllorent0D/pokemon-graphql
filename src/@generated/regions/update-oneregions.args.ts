import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsUpdateInput } from './regions-update.input';
import { Type } from 'class-transformer';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@ArgsType()
export class UpdateOneregionsArgs {

    @Field(() => regionsUpdateInput, {nullable:false})
    @Type(() => regionsUpdateInput)
    data!: regionsUpdateInput;

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;
}
