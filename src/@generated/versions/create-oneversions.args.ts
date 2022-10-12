import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsCreateInput } from './versions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneversionsArgs {

    @Field(() => versionsCreateInput, {nullable:false})
    @Type(() => versionsCreateInput)
    data!: versionsCreateInput;
}
