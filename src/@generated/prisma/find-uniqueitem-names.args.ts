import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from '../item-names/item-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueitemNamesArgs {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;
}
