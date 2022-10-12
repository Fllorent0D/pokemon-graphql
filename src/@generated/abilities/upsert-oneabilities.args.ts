import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateInput } from './abilities-create.input';
import { abilitiesUpdateInput } from './abilities-update.input';

@ArgsType()
export class UpsertOneabilitiesArgs {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateInput, {nullable:false})
    @Type(() => abilitiesCreateInput)
    create!: abilitiesCreateInput;

    @Field(() => abilitiesUpdateInput, {nullable:false})
    @Type(() => abilitiesUpdateInput)
    update!: abilitiesUpdateInput;
}
