import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from '../item-prose/item-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueitemProseArgs {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;
}
