import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneregionsArgs {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;
}
