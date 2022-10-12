import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseScalarWhereInput } from './ability-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { ability_proseUpdateManyMutationInput } from './ability-prose-update-many-mutation.input';

@InputType()
export class ability_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => ability_proseScalarWhereInput, {nullable:false})
    @Type(() => ability_proseScalarWhereInput)
    where!: ability_proseScalarWhereInput;

    @Field(() => ability_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_proseUpdateManyMutationInput)
    data!: ability_proseUpdateManyMutationInput;
}
