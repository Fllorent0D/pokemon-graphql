import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsScalarWhereInput } from './stats-scalar-where.input';
import { Type } from 'class-transformer';
import { statsUpdateManyMutationInput } from './stats-update-many-mutation.input';

@InputType()
export class statsUpdateManyWithWhereWithoutMove_damage_classesInput {

    @Field(() => statsScalarWhereInput, {nullable:false})
    @Type(() => statsScalarWhereInput)
    where!: statsScalarWhereInput;

    @Field(() => statsUpdateManyMutationInput, {nullable:false})
    @Type(() => statsUpdateManyMutationInput)
    data!: statsUpdateManyMutationInput;
}
