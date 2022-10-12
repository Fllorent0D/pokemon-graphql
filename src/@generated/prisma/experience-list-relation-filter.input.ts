import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceWhereInput } from '../experience/experience-where.input';

@InputType()
export class ExperienceListRelationFilter {

    @Field(() => experienceWhereInput, {nullable:true})
    every?: experienceWhereInput;

    @Field(() => experienceWhereInput, {nullable:true})
    some?: experienceWhereInput;

    @Field(() => experienceWhereInput, {nullable:true})
    none?: experienceWhereInput;
}
