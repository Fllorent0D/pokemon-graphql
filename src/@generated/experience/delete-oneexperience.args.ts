import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneexperienceArgs {

    @Field(() => experienceWhereUniqueInput, {nullable:false})
    @Type(() => experienceWhereUniqueInput)
    where!: experienceWhereUniqueInput;
}
