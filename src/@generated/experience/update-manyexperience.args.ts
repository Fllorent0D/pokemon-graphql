import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceUpdateManyMutationInput } from './experience-update-many-mutation.input';
import { Type } from 'class-transformer';
import { experienceWhereInput } from './experience-where.input';

@ArgsType()
export class UpdateManyexperienceArgs {

    @Field(() => experienceUpdateManyMutationInput, {nullable:false})
    @Type(() => experienceUpdateManyMutationInput)
    data!: experienceUpdateManyMutationInput;

    @Field(() => experienceWhereInput, {nullable:true})
    @Type(() => experienceWhereInput)
    where?: experienceWhereInput;
}
