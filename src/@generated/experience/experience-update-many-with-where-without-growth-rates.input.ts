import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceScalarWhereInput } from './experience-scalar-where.input';
import { Type } from 'class-transformer';
import { experienceUpdateManyMutationInput } from './experience-update-many-mutation.input';

@InputType()
export class experienceUpdateManyWithWhereWithoutGrowth_ratesInput {

    @Field(() => experienceScalarWhereInput, {nullable:false})
    @Type(() => experienceScalarWhereInput)
    where!: experienceScalarWhereInput;

    @Field(() => experienceUpdateManyMutationInput, {nullable:false})
    @Type(() => experienceUpdateManyMutationInput)
    data!: experienceUpdateManyMutationInput;
}
