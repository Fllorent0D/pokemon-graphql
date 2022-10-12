import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsUpdateManyMutationInput } from '../move-meta-ailments/move-meta-ailments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsWhereInput } from '../move-meta-ailments/move-meta-ailments-where.input';

@ArgsType()
export class UpdateManymoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_ailmentsUpdateManyMutationInput)
    data!: move_meta_ailmentsUpdateManyMutationInput;

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereInput)
    where?: move_meta_ailmentsWhereInput;
}
