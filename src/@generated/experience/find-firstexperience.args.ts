import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceWhereInput } from './experience-where.input';
import { Type } from 'class-transformer';
import { experienceOrderByWithRelationInput } from './experience-order-by-with-relation.input';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExperienceScalarFieldEnum } from '../prisma/experience-scalar-field.enum';

@ArgsType()
export class FindFirstexperienceArgs {

    @Field(() => experienceWhereInput, {nullable:true})
    @Type(() => experienceWhereInput)
    where?: experienceWhereInput;

    @Field(() => [experienceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<experienceOrderByWithRelationInput>;

    @Field(() => experienceWhereUniqueInput, {nullable:true})
    cursor?: experienceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExperienceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExperienceScalarFieldEnum>;
}
