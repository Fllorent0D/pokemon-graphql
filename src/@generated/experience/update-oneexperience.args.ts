import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceUpdateInput } from './experience-update.input';
import { Type } from 'class-transformer';
import { experienceWhereUniqueInput } from './experience-where-unique.input';

@ArgsType()
export class UpdateOneexperienceArgs {

    @Field(() => experienceUpdateInput, {nullable:false})
    @Type(() => experienceUpdateInput)
    data!: experienceUpdateInput;

    @Field(() => experienceWhereUniqueInput, {nullable:false})
    @Type(() => experienceWhereUniqueInput)
    where!: experienceWhereUniqueInput;
}
