import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneabilitiesArgs {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;
}
