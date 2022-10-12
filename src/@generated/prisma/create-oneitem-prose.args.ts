import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseCreateInput } from '../item-prose/item-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemProseArgs {

    @Field(() => item_proseCreateInput, {nullable:false})
    @Type(() => item_proseCreateInput)
    data!: item_proseCreateInput;
}
