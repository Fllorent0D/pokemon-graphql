import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesCreateInput } from './abilities-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilitiesArgs {

    @Field(() => abilitiesCreateInput, {nullable:false})
    @Type(() => abilitiesCreateInput)
    data!: abilitiesCreateInput;
}
