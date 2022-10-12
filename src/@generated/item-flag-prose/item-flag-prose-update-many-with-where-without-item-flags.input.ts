import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseScalarWhereInput } from './item-flag-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { item_flag_proseUpdateManyMutationInput } from './item-flag-prose-update-many-mutation.input';

@InputType()
export class item_flag_proseUpdateManyWithWhereWithoutItem_flagsInput {

    @Field(() => item_flag_proseScalarWhereInput, {nullable:false})
    @Type(() => item_flag_proseScalarWhereInput)
    where!: item_flag_proseScalarWhereInput;

    @Field(() => item_flag_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flag_proseUpdateManyMutationInput)
    data!: item_flag_proseUpdateManyMutationInput;
}
