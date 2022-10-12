import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { naturesCreateInput } from './natures-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnenaturesArgs {

    @Field(() => naturesCreateInput, {nullable:false})
    @Type(() => naturesCreateInput)
    data!: naturesCreateInput;
}
