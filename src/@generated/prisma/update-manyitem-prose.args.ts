import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseUpdateManyMutationInput } from '../item-prose/item-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_proseWhereInput } from '../item-prose/item-prose-where.input';

@ArgsType()
export class UpdateManyitemProseArgs {

    @Field(() => item_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_proseUpdateManyMutationInput)
    data!: item_proseUpdateManyMutationInput;

    @Field(() => item_proseWhereInput, {nullable:true})
    @Type(() => item_proseWhereInput)
    where?: item_proseWhereInput;
}
