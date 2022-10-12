import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateInput } from './versions-create.input';
import { versionsUpdateInput } from './versions-update.input';

@ArgsType()
export class UpsertOneversionsArgs {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateInput, {nullable:false})
    @Type(() => versionsCreateInput)
    create!: versionsCreateInput;

    @Field(() => versionsUpdateInput, {nullable:false})
    @Type(() => versionsUpdateInput)
    update!: versionsUpdateInput;
}
