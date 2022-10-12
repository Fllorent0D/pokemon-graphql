import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesUpdateInput } from './abilities-update.input';
import { Type } from 'class-transformer';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@ArgsType()
export class UpdateOneabilitiesArgs {

    @Field(() => abilitiesUpdateInput, {nullable:false})
    @Type(() => abilitiesUpdateInput)
    data!: abilitiesUpdateInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;
}
