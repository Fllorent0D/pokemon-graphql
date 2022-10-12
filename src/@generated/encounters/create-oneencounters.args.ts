import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersCreateInput } from './encounters-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencountersArgs {

    @Field(() => encountersCreateInput, {nullable:false})
    @Type(() => encountersCreateInput)
    data!: encountersCreateInput;
}
