import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseScalarWhereInput } from './growth-rate-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { growth_rate_proseUpdateManyMutationInput } from './growth-rate-prose-update-many-mutation.input';

@InputType()
export class growth_rate_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => growth_rate_proseScalarWhereInput, {nullable:false})
    @Type(() => growth_rate_proseScalarWhereInput)
    where!: growth_rate_proseScalarWhereInput;

    @Field(() => growth_rate_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => growth_rate_proseUpdateManyMutationInput)
    data!: growth_rate_proseUpdateManyMutationInput;
}
