import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersUpdateManyMutationInput } from './encounters-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encountersWhereInput } from './encounters-where.input';

@ArgsType()
export class UpdateManyencountersArgs {

    @Field(() => encountersUpdateManyMutationInput, {nullable:false})
    @Type(() => encountersUpdateManyMutationInput)
    data!: encountersUpdateManyMutationInput;

    @Field(() => encountersWhereInput, {nullable:true})
    @Type(() => encountersWhereInput)
    where?: encountersWhereInput;
}
