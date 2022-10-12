import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseWhereInput } from '../item-prose/item-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemProseArgs {

    @Field(() => item_proseWhereInput, {nullable:true})
    @Type(() => item_proseWhereInput)
    where?: item_proseWhereInput;
}
