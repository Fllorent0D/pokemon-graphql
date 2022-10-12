import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateInput } from './encounters-create.input';
import { encountersUpdateInput } from './encounters-update.input';

@ArgsType()
export class UpsertOneencountersArgs {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateInput, {nullable:false})
    @Type(() => encountersCreateInput)
    create!: encountersCreateInput;

    @Field(() => encountersUpdateInput, {nullable:false})
    @Type(() => encountersUpdateInput)
    update!: encountersUpdateInput;
}
