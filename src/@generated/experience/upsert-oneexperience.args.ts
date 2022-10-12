import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import { experienceCreateInput } from './experience-create.input';
import { experienceUpdateInput } from './experience-update.input';

@ArgsType()
export class UpsertOneexperienceArgs {

    @Field(() => experienceWhereUniqueInput, {nullable:false})
    @Type(() => experienceWhereUniqueInput)
    where!: experienceWhereUniqueInput;

    @Field(() => experienceCreateInput, {nullable:false})
    @Type(() => experienceCreateInput)
    create!: experienceCreateInput;

    @Field(() => experienceUpdateInput, {nullable:false})
    @Type(() => experienceUpdateInput)
    update!: experienceUpdateInput;
}
