import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesScalarWhereInput } from './abilities-scalar-where.input';
import { Type } from 'class-transformer';
import { abilitiesUpdateManyMutationInput } from './abilities-update-many-mutation.input';

@InputType()
export class abilitiesUpdateManyWithWhereWithoutGenerationsInput {

    @Field(() => abilitiesScalarWhereInput, {nullable:false})
    @Type(() => abilitiesScalarWhereInput)
    where!: abilitiesScalarWhereInput;

    @Field(() => abilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => abilitiesUpdateManyMutationInput)
    data!: abilitiesUpdateManyMutationInput;
}
