import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilitiesArgs {

    @Field(() => abilitiesWhereInput, {nullable:true})
    @Type(() => abilitiesWhereInput)
    where?: abilitiesWhereInput;
}
