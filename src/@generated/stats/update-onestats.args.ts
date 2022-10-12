import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsUpdateInput } from './stats-update.input';
import { Type } from 'class-transformer';
import { statsWhereUniqueInput } from './stats-where-unique.input';

@ArgsType()
export class UpdateOnestatsArgs {

    @Field(() => statsUpdateInput, {nullable:false})
    @Type(() => statsUpdateInput)
    data!: statsUpdateInput;

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;
}
