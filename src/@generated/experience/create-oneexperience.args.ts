import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceCreateInput } from './experience-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneexperienceArgs {

    @Field(() => experienceCreateInput, {nullable:false})
    @Type(() => experienceCreateInput)
    data!: experienceCreateInput;
}
