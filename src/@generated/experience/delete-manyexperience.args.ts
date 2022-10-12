import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { experienceWhereInput } from './experience-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyexperienceArgs {

    @Field(() => experienceWhereInput, {nullable:true})
    @Type(() => experienceWhereInput)
    where?: experienceWhereInput;
}
