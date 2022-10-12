import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersUpdateInput } from './encounters-update.input';
import { Type } from 'class-transformer';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';

@ArgsType()
export class UpdateOneencountersArgs {

    @Field(() => encountersUpdateInput, {nullable:false})
    @Type(() => encountersUpdateInput)
    data!: encountersUpdateInput;

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;
}
