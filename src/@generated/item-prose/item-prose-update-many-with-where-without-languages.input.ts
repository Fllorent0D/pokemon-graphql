import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseScalarWhereInput } from './item-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { item_proseUpdateManyMutationInput } from './item-prose-update-many-mutation.input';

@InputType()
export class item_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => item_proseScalarWhereInput, {nullable:false})
    @Type(() => item_proseScalarWhereInput)
    where!: item_proseScalarWhereInput;

    @Field(() => item_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_proseUpdateManyMutationInput)
    data!: item_proseUpdateManyMutationInput;
}
