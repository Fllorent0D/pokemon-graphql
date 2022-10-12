import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsUpdateManyMutationInput } from './versions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { versionsWhereInput } from './versions-where.input';

@ArgsType()
export class UpdateManyversionsArgs {

    @Field(() => versionsUpdateManyMutationInput, {nullable:false})
    @Type(() => versionsUpdateManyMutationInput)
    data!: versionsUpdateManyMutationInput;

    @Field(() => versionsWhereInput, {nullable:true})
    @Type(() => versionsWhereInput)
    where?: versionsWhereInput;
}
