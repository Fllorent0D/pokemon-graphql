import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquestatsArgs {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;
}
