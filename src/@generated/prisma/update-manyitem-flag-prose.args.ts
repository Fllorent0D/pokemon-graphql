import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseUpdateManyMutationInput } from '../item-flag-prose/item-flag-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_flag_proseWhereInput } from '../item-flag-prose/item-flag-prose-where.input';

@ArgsType()
export class UpdateManyitemFlagProseArgs {

    @Field(() => item_flag_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flag_proseUpdateManyMutationInput)
    data!: item_flag_proseUpdateManyMutationInput;

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    @Type(() => item_flag_proseWhereInput)
    where?: item_flag_proseWhereInput;
}
