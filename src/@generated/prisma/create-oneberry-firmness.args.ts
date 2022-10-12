import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessCreateInput } from '../berry-firmness/berry-firmness-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneberryFirmnessArgs {

    @Field(() => berry_firmnessCreateInput, {nullable:false})
    @Type(() => berry_firmnessCreateInput)
    data!: berry_firmnessCreateInput;
}
