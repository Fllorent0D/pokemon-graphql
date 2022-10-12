import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsUpdateInput } from './versions-update.input';
import { Type } from 'class-transformer';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@ArgsType()
export class UpdateOneversionsArgs {

    @Field(() => versionsUpdateInput, {nullable:false})
    @Type(() => versionsUpdateInput)
    data!: versionsUpdateInput;

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;
}
